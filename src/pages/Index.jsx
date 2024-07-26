// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">My Application</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to My Application</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <Button>Get Started</Button>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
