import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Input } from './components/input';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { UserContextProvider } from './components/context/UserContext';
import { DomRef } from './components/ref/DomRef';

function App() {

  //typing of object prop
  const personName = {
    first: 'ishara',
    last: 'anupama'
  }

  //type an array
  const personNameList = [
    {
      first: 'ishara',
      last: 'kulathunga'
    },
    {
      first: 'malith',
      last: 'champika'
    },
    {
      first: 'isuru',
      last: 'mallawa'
    }
  ]

  return (
    <div className="App">
      {/* <Greet name="waruna new" messageCount={0} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personNameList} />
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Placeholder new update</Heading>
      </Oscar>
      <Button handleClick={(event) => {
        console.log("Hi waruna click me", event);
      }} />


      <Input value='' handleChange={(event) => console.log(event)} />

      <Container styles={{ border: '1px solid red', padding: '1rem' }} />
      <LoggedIn />
      <User /> */}

      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      <DomRef />
    </div>
  );
}

export default App;
