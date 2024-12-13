import { Bell, Grid2x2, Mail, Search, Settings } from "lucide";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Grid2x2 />
        <div>
          <Search />
          <input placeholder="Search" />
        </div>
      </div>
      <div>
        <div>
          <Mail />
        </div>
        <div>
          <Settings />
        </div>
        <div>
          <Bell />
        </div>
        <div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
