export const getUserByEmail = async (email: string, name: string) => {
  console.log(email, name);
  try {
    const response = await fetch(`http://localhost:8081/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, name: name }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    console.error("Error:", error);
  }
};
