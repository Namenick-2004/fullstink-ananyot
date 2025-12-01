function createLogEntry(message) {
    const now =  new Date();
    const timestamp = now.toLocaleString('th-TH');
    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();

    const LogMessage = message.toUpperCase();
    return `[${timestamp}] [ID: ${eventId}] ${LogMessage}`;
}
const log = createLogEntry('user login successful');
console.log(log);