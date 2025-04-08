import ContactCard from '../contatos/ContactCard';

export default function Contato() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-white">Nossa Equipe</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <ContactCard
          name="Zinedine Zidane"
          role="Desenvolvedor Frontend"
          email="zidas@example.com"
          phone="+55 11 99999-0000"
          image="https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg"
        />
        <ContactCard
          name="Ronilson Prefeito"
          role="UI/UX Designer"
          email="r13@example.com"
          phone="+55 21 98888-0000"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pOYNTVHBYb-j3r8EvefWZDtAvpShwN8CeQ&s"
        />

        <ContactCard
          name="Pedro Levi Vaqueiro"
          role="Vaqueiro"
          email="jumentinha@example.com"
          phone="+55 21 98348-0000"
          image="https://storage.seduc.ce.gov.br/apiregistrofotografico/aluno/2167483/foto2167483_M.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=apiregistrofotografico%2F20250408%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250408T232126Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=df0a3a018f99d406a97b761a23b67aaf25f08a61400d79efe8758ff074dcf3d3"
        />
        
      </div>
    </div>
  );
}
