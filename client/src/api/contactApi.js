const API_BASE = "http://localhost:5000/api/contactId";


// Create a new contact
export const createContact = async (contact) => {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
};

// Get all contacts
export const getContacts = async () => {
  try {
    const response = await fetch(API_BASE, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};