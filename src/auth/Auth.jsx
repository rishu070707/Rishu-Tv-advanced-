import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import video from './batman.mp4';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const SignIn = async (e) => {
    e.preventDefault();
    try {
      const userhire = await createUserWithEmailAndPassword(auth, email, password);
      console.log('signed up', userhire.user);
      toast.success('Signed in successfully');
      navigate('/movies');
    } catch (error) {
      console.error(error);
      toast.error('Sign in failed');
    }
  };

  const SignInwithGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('google user', result.user);
      toast.success('Signed in with Google');
      navigate('/movies');
    } catch (error) {
      console.error(error);
      toast.error('Google Sign-in failed');
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">
      <div className="flex w-[90%] max-w-3xl rounded-xl overflow-hidden shadow-lg border border-gray-700">

        {/* Left Side - Login Form */}
        <div className="w-1/2 bg-black p-10 flex flex-col justify-center space-y-6 gap-x-5">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 left-4">Welcome Back </h2>

        
          <button
            className="bg-red-700 hover:bg-red-800 text-white py-2 rounded-full font-semibold transition"
            onClick={SignInwithGoogle}
          >
            Sign In with Google
          </button>
        </div>

        {/* Right Side - Video */}
        <div className="w-1/2 bg-black flex items-center justify-center">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Auth;

