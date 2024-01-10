import React, { useState } from 'react';
import { login } from '../store/authSlice';
import { Link } from 'react-router-dom';
import { authService } from '../services/api';

export default function SignUnPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async () => {
      const response = await authService.signUp({ email, password });
      if (response.token) {
        console.log(response.token)
        login({ email, token: response.token });
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } 
    return (
       <div className="flex items-center justify-center h-screen">
    <div className="w-96 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            className="w-full bg-green-500 text-white p-2 rounded"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <div className="mb-4">
            <p>Already Registered, Please <Link to="/">Sign In</Link></p>
          </div>
        </form>
        </div>
    </div>
    )
}