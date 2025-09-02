import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('Product Image Gallery', () => {
    it('should not render if images are empty', () => {
         const { container } = render(<ProductImageGallery imageUrls={[]} />);
        expect(container.firstChild).toBeNull();

    })

     it('should render a list of images', () => {
            const imageUrls = [
               'url1', 'url2'
            ]
            render(<ProductImageGallery imageUrls={imageUrls}/>)
    
           const images = screen.getAllByRole('img');
           expect(images).toHaveLength(2);
           imageUrls.forEach((url, index) => {
             expect(images[index]).toHaveAttribute('src', url)
           })
          
           
        })
})