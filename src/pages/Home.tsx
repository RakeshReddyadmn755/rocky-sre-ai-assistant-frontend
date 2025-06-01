
import { useState } from 'react';

export default function Home() {
  const [rawInput, setRawInput] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('https://rocky-sre-ai-assistant-backend.onrender.com/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: rawInput }),
    });
    const data = await res.json();
    setSummary(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">SRE Summary Assistant</h1>
      <textarea
        className="w-full border rounded p-2 mb-4"
        rows={6}
        placeholder="Paste your Win / Miss / Insight update here..."
        value={rawInput}
        onChange={(e) => setRawInput(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Summarize
      </button>
      <pre className="mt-6 bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">{summary}</pre>
    </div>
  );
}
