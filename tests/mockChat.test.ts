import { describe, expect, it } from 'vitest';
import { createMockReply } from '../src/chat/mockChat';

describe('createMockReply', () => {
  it('echoes the prompt in a mock response', () => {
    const reply = createMockReply('olá mundo');

    expect(reply.role).toBe('assistant');
    expect(reply.content).toContain('olá mundo');
  });
});
