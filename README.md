# Domainify Action

This action will sanitize an input string to make it a valid domain or subdomain name.

## Inputs
`value`: The input string to be sanitized.

## Outputs
`value`: The sanitized domain or subdomain name.

## Example usage
```yaml
uses: domainify-action@v1
with:
  value: 'Hello World'
```
Output: `hello-world`


## Sanitization Rules
- Converts the input string to lowercase.
- Removes all characters except letters, numbers, underscores, and dashes
- Replaces underscores with dashes
- Collapses multiple dashes into a single dash
- Remove leading and trailing non-letter characters