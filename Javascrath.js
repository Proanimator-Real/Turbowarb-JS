class MyExt {
  getInfo() {
    return {
      id: 'myext',
      name: 'My Extension',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'hello'
        }
      ]
    };
  }

  hello() {
    return 'world';
  }
}

Scratch.extensions.register(new MyExt());
