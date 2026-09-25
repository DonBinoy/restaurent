# Liquid Glass Effect (`GlassSurface`)

The `GlassSurface` component implements a highly advanced "liquid glass" or "frosted chromatic aberration" effect. It achieves this by combining standard CSS `backdrop-filter` techniques with complex **SVG Filters** (`<feDisplacementMap>`, `<feColorMatrix>`, and `<feBlend>`).

## How the Effect Works

The core of the "liquid glass" distortion relies on separating the background image into its Red, Green, and Blue (RGB) color channels, applying a displacement (distortion) to each channel independently, and then blending them back together. 

Here is the step-by-step breakdown of the SVG filter pipeline:

1. **Displacement Map Generation**: The component dynamically generates an SVG `<feImage>` that acts as a "map". This map dictates how the pixels behind the component should be pushed or distorted.
2. **Channel Separation**: Using `<feColorMatrix>`, the incoming graphic is split into distinct Red, Green, and Blue channels.
3. **Independent Displacement**: Each color channel is passed through its own `<feDisplacementMap>`. By setting slightly different scales and offsets (`redOffset`, `greenOffset`, `blueOffset`), the channels are distorted by different amounts. This creates a **chromatic aberration** effect (color fringing), similar to viewing light through thick, curved glass or liquid.
4. **Recombination**: The `<feBlend mode="screen">` filter takes the distorted Red, Green, and Blue channels and merges them back into a single image.
5. **Softening**: A final `<feGaussianBlur>` is applied to soften the edges of the distortion, making it feel viscous and liquid-like rather than sharp and digital.
6. **Fallback Mechanism**: The component is smart enough to detect browser support. If the complex SVG filters aren't supported, it gracefully degrades to a standard, high-quality CSS `backdrop-filter: blur()`.

## Basic Usage

For a standard, elegant frosted glass look without extreme distortion:

```tsx
import GlassSurface from './GlassSurface'

export default function App() {
  return (
    <GlassSurface 
      width={300} 
      height={200}
      borderRadius={30}
      className="p-8"
    >
      <h2 className="text-white text-2xl font-bold">Glass Card</h2>
    </GlassSurface>
  )
}
```

## Advanced Liquid Distortion

To push the chromatic aberration and liquid distortion to the maximum, you can tweak the displacement and offset props:

```tsx
import GlassSurface from './GlassSurface'

export default function AdvancedApp() {
  return (
    <GlassSurface
      width="100%"
      height={400}
      displace={0.5}           // Increases the blur/softness of the liquid
      distortionScale={-180}   // Base scale for the displacement map
      redOffset={0}            // Red channel shift
      greenOffset={15}         // Green channel shift (creates the rainbow edge)
      blueOffset={30}          // Blue channel shift
      brightness={55}
      opacity={0.9}
      mixBlendMode="screen"
      className="z-50"
    >
      <span className="text-white font-serif text-4xl">Liquid Glass Distortion</span>
    </GlassSurface>
  )
}
```

## Key Properties

| Prop | Description |
| :--- | :--- |
| `distortionScale` | The base intensity of the liquid distortion. |
| `redOffset`, `greenOffset`, `blueOffset` | Determines how far apart the color channels pull from each other. Increasing the gap between these values increases the chromatic aberration (rainbow fringing). |
| `displace` | Controls the standard deviation of the final gaussian blur. Higher values make the glass look thicker and more "melted". |
| `mixBlendMode` | Determines how the gradient maps blend. Defaults to `difference`. Changing this alters the distortion pattern entirely. |
| `backgroundOpacity` | Sets the opacity of the base tint color beneath the glass. |
