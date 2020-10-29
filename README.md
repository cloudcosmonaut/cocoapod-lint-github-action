# Cocoapod lib linting

This action will execute Cocoapod lib lint validation. 

## Inputs

### `podspec`

**Required** The location of the Podspec of your library

### `no-clean`

Lint leaves the build directory intact for inspection.

### `allow-warnings`

Lint validates even if warnings are present.

## Example usage

```
uses: actions/cocoapod-lint-github-action@v1
with:
  podspec: 'MyLibrary.Podspec'
```



