

## Fix Build Error: Missing `build:dev` Script

### Problem
The `package.json` file is missing the required `scripts` section entirely. The build system needs a `build:dev` script to compile the project.

### Current State
```json
{
  "dependencies": {
    // ... dependencies listed
  }
}
```

### Required State
```json
{
  "name": "slrtsbm-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview"
  },
  "dependencies": {
    // ... existing dependencies
  }
}
```

### How to Fix

Since I cannot edit `package.json` directly, you have two options:

**Option A: Via GitHub (Recommended)**
1. Go to **Settings** → **GitHub** in Lovable
2. Connect your project to GitHub if not already connected
3. Open the repository on GitHub
4. Edit `package.json` and add the missing fields
5. Commit the change - it will sync back to Lovable

**Option B: Create a New Project**
1. Create a new Lovable project (it will have the correct template)
2. Copy your `src/App.tsx`, `src/App.css`, and logo files to the new project

### Technical Details

The following fields need to be added to `package.json`:
- `"name"`: Project identifier
- `"private": true`: Prevents accidental publishing
- `"version"`: Semantic version
- `"type": "module"`: Enables ES modules
- `"scripts"`: Build commands including the required `build:dev`

