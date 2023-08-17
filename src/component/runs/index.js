export const Display = () => {
    const[score, setScore ] = useState(0);
    const[wicket, setWickets ] = useState(0);
    // const[overs,setOvers] = useState(0);
    // const [past, setPast] = useState([]);
    // const [present, setPresent] = useState(null);
    const[balls, setBalls] = useState(0);

    const add0 = () =>{
      setScore(score + 0)
      setBalls(balls + 1)
     }
     const add1 = () =>{
      setScore(score + 1)
      setBalls(balls + 1)
     }
     const add2 = () =>{
      setScore(score + 2)
      setBalls(balls + 1)
     }
     const add3 = () =>{
      setScore(score + 3)
      setBalls(balls + 1)
     }
     const add4 = () =>{
      setScore(score + 4)
      setBalls(balls + 1)
     }
     const add6 = () =>{
      setScore(score + 6)
      setBalls(balls + 1)
     }

     const out = () =>{
        setWickets(wicket + 1)
        }

        const wide = () =>{
          setBalls(balls - 1);
        }
      
    //  const undo = () =>{
    //   if(past.length == 0) return;

    //   const newPast = [...past];
    //   const newPresent = newPast.pop();

    //   setPast(newPast);
    //   setPresent(newPresent);
    //  }
    }