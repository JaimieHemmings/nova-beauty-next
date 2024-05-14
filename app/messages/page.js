import ConnectDB from '@/config/database';
import MessageCard from '@/components/Message';
import Message from '@/models/Message';
import { convertToSerializeableObject } from '@/utils/convertToObject';
import { getSessionUser } from '@/utils/getSessionUser';

const MessagesPage = async () => {
  await ConnectDB();
  const sessionUser = await getSessionUser();

  let messages = '';

  if(sessionUser.user.isAdmin) {
    const readMessages = await Message.find({ read: true })
      .sort({ createdAt: -1}).lean();
  
    const unreadMessages = await Message.find({
      read: false,
    }).sort({ createdAt: -1 }).lean();
  
    messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
      const message = convertToSerializeableObject(messageDoc)
      return message
    })
  }

  return (
    <section>
      <h1>Your Messages</h1>
      {messages.length === 0 ? (
        <p>You have no messages</p>
      ) : (
        messages.map((message) => (
          <MessageCard key={message._id} message={message} />
        ))
      )}
    </section>
  )
}

export default MessagesPage