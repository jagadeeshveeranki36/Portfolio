import React from 'react';
import { motion } from 'framer-motion';

export default function DeveloperTerminal() {
  const codeLines = [
    { text: 'from flask import Blueprint, request, jsonify', type: 'import' },
    { text: 'from models import User, db', type: 'import' },
    { text: 'import bcrypt', type: 'import' },
    { text: '', type: 'empty' },
    { text: "auth_bp = Blueprint('auth', __name__)", type: 'def' },
    { text: '', type: 'empty' },
    { text: "@auth_bp.route('/api/login', methods=['POST'])", type: 'decorator' },
    { text: 'def authenticate_session():', type: 'func' },
    { text: '    payload = request.get_json()', type: 'body' },
    { text: "    email = payload.get('email')", type: 'body' },
    { text: "    pwd = payload.get('password')", type: 'body' },
    { text: '    ', type: 'empty' },
    { text: '    # Airtight server hashing & validation', type: 'comment' },
    { text: '    user = User.query.filter_by(email=email).first()', type: 'body' },
    { text: '    if user and bcrypt.check_password(user.hash, pwd):', type: 'body' },
    { text: '        return jsonify({', type: 'body' },
    { text: '            "status": "success",', type: 'string' },
    { text: '            "session_token": user.gen_token()', type: 'string' },
    { text: '        }), 200', type: 'body' },
    { text: '    return jsonify({"error": "Invalid credentials"}), 401', type: 'body' }
  ];

  const getLineColor = (type) => {
    switch (type) {
      case 'import':
        return 'text-emerald-400 dark:text-emerald-300';
      case 'def':
        return 'text-sky-400 dark:text-sky-300';
      case 'decorator':
        return 'text-amber-400 dark:text-amber-300';
      case 'func':
        return 'text-emerald-300 dark:text-emerald-200';
      case 'comment':
        return 'text-zinc-500 italic';
      case 'string':
        return 'text-teal-300 dark:text-teal-200';
      default:
        return 'text-zinc-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="w-full max-w-lg rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-300 shadow-2xl overflow-hidden font-mono text-[11px] md:text-xs select-none"
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">auth_routes.py // Flask Blueprint</span>
        <div className="w-8" />
      </div>

      {/* Editor Content */}
      <div className="p-4 md:p-6 space-y-1 bg-zinc-950 overflow-x-auto min-h-[220px]">
        {codeLines.map((line, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <span className="w-6 text-right text-zinc-650 select-none">{idx + 1}</span>
            <span className={`whitespace-pre ${getLineColor(line.type)}`}>
              {line.text}
            </span>
          </div>
        ))}
      </div>

    </motion.div>
  );
}
