export function ButtonModal({ label, title }) {
  const handleModal = () => {
    if (title === 'Signup Now') {
      document.getElementById('signup').showModal();
      document.getElementById('login').close();
    } else {
      document.getElementById('login').showModal();
      document.getElementById('signup').close();
    }
  };
  return (
    <p className="text-center -mt-3 mb-8">
      {label}
      <button onClick={() => handleModal()} className="underline text-red ml-1">
        {title}
      </button>
    </p>
  );
}
