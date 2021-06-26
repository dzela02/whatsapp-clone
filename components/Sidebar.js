import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Pretrazi caskanja" />
      </Search>
      <SidebarButton>Pokreni novo caskanje</SidebarButton>

      {/* Lista govnara sa kojima se dopisujes*/}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
