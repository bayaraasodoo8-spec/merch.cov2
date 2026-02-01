
import React, { useState } from 'react';
import { generateMerchIdea } from '../services/geminiService';

interface LabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LabModal: React.FC<LabModalProps> = ({ isOpen, onClose }) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);
    const idea = await generateMerchIdea(description);
    setResult(idea);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-deep-black/80 backdrop-blur-sm">
      <div className="bg-stark-white w-full max-w-4xl max-h-[90vh] overflow-y-auto brutalist-border brutalist-shadow-lime p-8 md:p-12 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-deep-black text-white p-2 hover:bg-hot-pink transition-colors brutalist-border-sm"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h2 className="text-4xl md:text-6xl font-display text-deep-black uppercase tracking-tighter mb-8">
          AI DESIGN <span className="text-electric-blue">LAB V2</span>
        </h2>
        
        <div className="mb-10">
          <label className="block text-xl font-display uppercase mb-4">What's your brand vibe?</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. A futuristic coffee shop for developers with high-contrast cyber-brutalist energy..."
            className="w-full h-32 brutalist-border p-6 text-xl font-body font-bold focus:ring-0 focus:border-neon-lime transition-all"
          />
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="mt-6 bg-neon-lime text-deep-black w-full py-6 text-2xl font-display uppercase brutalist-border brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50"
          >
            {loading ? 'GENERATING...' : 'GENERATE ASSETS'}
          </button>
        </div>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-electric-blue text-white p-8 brutalist-border brutalist-shadow-sm">
              <h3 className="text-2xl font-display uppercase mb-4 text-neon-lime">Strategic Angle</h3>
              <p className="text-xl font-bold">{result.brandAngle}</p>
              <div className="mt-8">
                <h4 className="font-display uppercase mb-2">Suggested Assets</h4>
                <ul className="list-none space-y-1">
                  {result.suggestedItems.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-neon-lime">▶</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-hot-pink text-white p-8 brutalist-border brutalist-shadow-sm">
              <h3 className="text-2xl font-display uppercase mb-4 text-deep-black">Legacy Slogans</h3>
              <div className="space-y-4">
                {result.slogans.map((slogan: string, i: number) => (
                  <p key={i} className="text-3xl font-display leading-none uppercase tracking-tighter">
                    "{slogan}"
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-display uppercase mb-2 text-deep-black">Visual Direction</h4>
                <p className="font-bold italic">{result.visualDirection}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabModal;
