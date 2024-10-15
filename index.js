const core = require('@actions/core');

function domainifyValue(input) {
  let value = input;
  value = input.toLowerCase(); // Convert to lowercase
  value = value.replace(/[^a-z0-9_-]/g, ''); // Remove all characters except letters, numbers, underscores, and dashes
  value = value.replace(/_/g, '-'); // Replace underscores with dashes
  value = value.replace(/--+/g, '-'); // Collapse multiple dashes into a single dash
  value = value.replace(/^[^a-z]+/, ''); // Remove leading non-letter characters
  value = value.replace(/[^a-z]+$/, ''); // Remove trailing non-letter characters
  return value;
}

try {
  const inputValue = core.getInput('value');
  core.setOutput('value', domainifyValue(inputValue));
} catch (error) {
  core.setFailed(error.message);
}
