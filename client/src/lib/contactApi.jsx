const API_BASE = "/api/contacts";

// Create Contact
export const createContact = async (contactData) => {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });
    return await response.json();
  } catch (err) {
    console.error("Error creating contact:", err);
    throw err;
  }
};

// List Contacts
export const listContacts = async () => {
  try {
    const response = await fetch(API_BASE, { method: "GET" });
    return await response.json();
  } catch (err) {
    console.error("Error listing contacts:", err);
    throw err;
  }
};
