import { useState } from 'react';
import API from '../api';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/register', form);
    localStorage.setItem('token', res.data.token);
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border px-4 py-2" />
      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border px-4 py-2" />
      <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} className="w-full border px-4 py-2" />
      <button className="bg-blue-600 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
