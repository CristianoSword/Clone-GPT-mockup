import { describe, expect, it } from 'vitest';
import { createMockReply } from '../src/chat/mockChat';

describe('createMockReply echo', () => {
  it('echoes the prompt text', () => {
    const reply = createMockReply('turn this into a reply');

    expect(reply.content).toContain('turn this into a reply');
  });
});
