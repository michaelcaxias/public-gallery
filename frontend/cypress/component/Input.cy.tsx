import React from 'react';
import { mount } from 'cypress/react';
import Input from '../../src/components/Input';

const INPUT_TEST_ID = '[data-testid=input-text]';

describe('Input.cy.ts', () => {
  it('mounts', () => {
    mount(<Input title="Text" id="text" />);
  });
  it('should be possible to write', () => {
    mount(<Input title="Text" id="text" />);
    cy.get(INPUT_TEST_ID).type('Hello World');
    cy.get(INPUT_TEST_ID).should('have.value', 'Hello World');
  });
});
