import { it, expect, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ProductImageGallery from "../../src/components/ProductImageGallery";

afterEach(cleanup);

describe("ProductImageGallery Component", () => {
  it("renders no image when list is empty", () => {
    const result = render(<ProductImageGallery imageUrls={[]} />);

    expect(result.container).toBeEmptyDOMElement();
  });

  it("renders images", () => {
    const urls = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={urls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(urls.length);

    images.forEach((image, index) => {
      expect(image).toHaveAttribute("src", urls[index]);
    });
  });
});
