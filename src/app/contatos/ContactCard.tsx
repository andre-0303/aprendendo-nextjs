type ContactCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
};

export default function ContactCard({ name, role, email, phone, image }: ContactCardProps) {
  return (
    <div className="w-full max-w-[320px] bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:scale-[1.02] transition-transform cursor-pointer">
      <div className="p-6 flex flex-col items-center text-center">
        <img
          className="w-28 h-28 rounded-full object-cover border-4 border-zinc-200 dark:border-zinc-600 shadow-sm mb-4"
          src={image}
          alt={name}
        />
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{name}</h2>
        <p className="text-zinc-600 dark:text-zinc-400">{role}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">{email}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{phone}</p>
      </div>
    </div>
  );
}
