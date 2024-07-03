const EVENT_TYPE = 'change';
const eventSourceUrl = `${SERVE_ORIGIN}/esbuild`;

const eventSource = new EventSource(eventSourceUrl);
eventSource.addEventListener(EVENT_TYPE, () => {
  console.log('Change detected, reloading page...');
  location.reload();
});

eventSource.addEventListener('error', (err) => {
  console.error('EventSource failed:', err);
});

window.addEventListener('beforeunload', () => {
  eventSource.close();
});