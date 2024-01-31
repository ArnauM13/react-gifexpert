import React from 'react'
import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('should match the snapshot', () => {
        const container = render(<GifExpertApp />);
        expect(container).toMatchSnapshot()
    });
});