import MainLayout from '~/layouts/_main';

export default function Index() {
  return (
    <MainLayout>
      <div className="container text-center gradient px-8 py-16 bg-white rounded-lg border border-green-200/80 my-8">
        <div className="drop-shadow-sm max-w-[1024px] m-auto">
          <h1 className="font-serif font-bold text-3xl lg:text-5xl bg-gradient-to-r inline-block gradien from-purple-400 via-purple-500/95 to-purple-400 bg-clip-text text-transparent">
            Welcome to Remix Starter
          </h1>
        </div>
      </div>
    </MainLayout>
  );
}
