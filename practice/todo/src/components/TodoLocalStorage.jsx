const todokey = "reacttodos";

export   const localstorage=()=>{
    try {
      const Todos = localStorage.getItem(todokey);
      // Ensure it returns an empty array if no tasks are stored
      return Todos ? JSON.parse(Todos) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      // Clear invalid data from localStorage
      localStorage.removeItem(todokey);
      return [];
    }

  }

  export const  setlocalstorage=(task)=>{
    return  localStorage.setItem(todokey, JSON.stringify(task));
      
    
  } 