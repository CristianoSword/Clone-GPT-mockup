import express from 'express';
import path from 'node:path';
import { renderChatMessage, renderChatThread } from './views/render';
import { createMockReply, createSeedMessages, type ChatMessage } from './chat/mockChat';

export function createApp() {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(process.cwd(), 'src', 'views'));

  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(process.cwd(), 'public')));

  const thread: ChatMessage[] = createSeedMessages();

  app.get('/', (_req, res) => {
    res.render('index', { thread });
  });

  app.post('/chat', (req, res) => {
    const prompt = String(req.body.prompt ?? '').trim();

    if (!prompt) {
      return res.status(400).send(renderChatThread(thread));
    }

    thread.push({ role: 'user', content: prompt, timestamp: new Date().toISOString() });
    thread.push(createMockReply(prompt));

    return res.send(renderChatThread(thread));
  });

  app.get('/partials/messages', (_req, res) => {
    res.send(renderChatThread(thread));
  });

  app.get('/partials/message/:role', (req, res) => {
    const role = req.params.role === 'assistant' ? 'assistant' : 'user';
    res.send(renderChatMessage({ role, content: 'Preview message', timestamp: new Date().toISOString() }));
  });

  return app;
}
