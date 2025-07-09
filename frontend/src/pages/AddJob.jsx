import { useState } from 'react';
import API from '../api';

const AddJob = () => {
  const [form, setForm] = useState({ company: '', position: '', status: 'Applied' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/jobs', form);
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input placeholder="Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full border px-4 py-2" />
      <input placeholder="Position" value={form.position} onChange={e => setForm({ ...form, position: e.target.value })} className="w-full border px-4 py-2" />
      <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="w-full border px-4 py-2">
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2">Add Job</button>
    </form>
  );
};

export default AddJob;
