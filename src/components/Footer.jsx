import { Package2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Package2 className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </div>
          <nav className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © 2024 Acme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
