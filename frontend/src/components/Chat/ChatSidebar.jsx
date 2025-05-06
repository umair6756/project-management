// components/ContactsSidebar.jsx
import React from 'react';

const contacts = [
  { name: 'Vanessa Knox', message: 'There are many variations of passages', time: '10:45 AM' },
  { name: 'Abigail Bell', message: 'changed an issue from "In Progress" to', time: '11:45 AM' },
  { name: 'Diane Blake', message: 'It is a long established fact that a reader ...', time: '12:45 AM' },
  { name: 'Megan Dyer', message: 'Contrary to popular belief', time: '12:46 AM' },
  { name: 'Abigail Bell', message: '', time: '12:47 PM' },
];

const ContactsSidebar = () => {
  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-6">Chat</div>
      {contacts.map((contact, idx) => (
        <div key={idx} className="mb-4">
          <div className="text-sm font-semibold">{contact.name}</div>
          <div className="text-xs text-gray-300">{contact.message}</div>
          <div className="text-xs text-right text-gray-400">{contact.time}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactsSidebar;