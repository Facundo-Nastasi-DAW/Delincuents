interface SignUpFormSectionProps {
  onSwitch: () => void;
}

export const SignUpForm: React.FC<SignUpFormSectionProps> = ({ onSwitch }) => {
  return (
    <div className="md:w-1/2 flex flex-col justify-center items-center px-10 py-16">
      <form className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl" required />

        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="password" className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl" required />

        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
        <input type="password" className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl" required />

        <button type="submit" className="w-full bg-black text-white py-2 rounded-xl hover:opacity-90 transition">
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">Already have an account?</p>
        <button
          type="button"
          className="mt-2 px-4 py-2 bg-[#899878] text-white rounded-2xl hover:bg-[#E4E6C3] hover:text-black"
          onClick={onSwitch}
        >
          Log In
        </button>
      </div>
    </div>
  );
};
