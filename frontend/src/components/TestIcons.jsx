import React from 'react';
// Lucide icons ko import kar rahe hain
import { Mail, Lock, User, CheckCircle, Smartphone } from 'lucide-react';

const TestIcons = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-6">
      <h1 className="text-white text-2xl font-bold mb-4">Lucide Icon Test</h1>
      
      <div className="flex gap-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
        {/* Har icon ko alag color aur size dekar test kar rahe hain */}
        <div className="flex flex-col items-center gap-2">
          <Mail className="w-8 h-8 text-blue-400" />
          <span className="text-gray-400 text-xs">Mail</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Lock className="w-8 h-8 text-purple-400" />
          <span className="text-gray-400 text-xs">Lock</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <User className="w-8 h-8 text-green-400" />
          <span className="text-gray-400 text-xs">User</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
          <span className="text-gray-400 text-xs">Success</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Smartphone className="w-8 h-8 text-rose-400" />
          <span className="text-gray-400 text-xs">Mobile</span>
        </div>
      </div>

      <p className="text-gray-500 italic">Agar aapko upar rang-birange icons dikh rahe hain, toh Lucide perfect kaam kar raha hai!</p>
    </div>
  );
};

export default TestIcons;