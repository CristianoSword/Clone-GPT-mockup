import { describe, expect, it } from 'vitest';
import { createMockReply } from '../src/chat/mockChat';

describe('createMockReply role', () => {
  it('always creates an assistant message', () => {
    const reply = createMockReply('hello');

    expect(reply.role).toBe('assistant');
  });
});
