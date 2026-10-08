---
"@_linked/primitives": minor
---

Add `Combobox`, a searchable single-select built from Popover and Command. `Select` remains the list that does not filter.

Item values are ids. Pass the visible label separately as `displayValue` on the root and as `keywords` on the item, or the closed trigger and the search will not match the name.

```tsx
import { Combobox } from '@_linked/primitives/components/Combobox';

<Combobox.Root
  value={selectedId}
  displayValue={selectedLabel}
  onValueChange={setSelectedId}
>
  <Combobox.Trigger placeholder="Select an action" />
  <Combobox.Content>
    <Combobox.Input placeholder="Search" />
    <Combobox.List>
      <Combobox.Empty>No matches</Combobox.Empty>
      <Combobox.Item value={action.id} keywords={[action.name]}>
        {action.name}
      </Combobox.Item>
    </Combobox.List>
  </Combobox.Content>
</Combobox.Root>
```

`onValueChange` receives the `value` prop of the chosen item, not a lowercased search string.
