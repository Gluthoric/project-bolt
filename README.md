# Project Documentation

## Local Scryfall Implementation

### Overview
The project has been updated to use local Scryfall data instead of making API calls. This change improves reliability by removing API dependencies and allows for offline operation.

### Implementation Details

#### Data Sources
1. Cards Data
   - Using `default-cards.json` from Scryfall's bulk data
   - Located in `data/default-cards.json`
   - Contains comprehensive card data including names, sets, types, and oracle text

2. Sets Data
   - Using `sets.json` from Scryfall's API
   - Located in `data/sets.json`
   - Contains detailed set information including:
     - Set codes and names
     - Release dates
     - Set types (core, expansion, masters, etc.)
     - Block information
     - Card counts
     - Digital/foil status
     - Icon URIs

To update the sets data:
1. Run the Python update script: `./scripts/update_sets.py`
   - Fetches latest sets from Scryfall API
   - Preserves existing set data
   - Adds any new sets
   - Sorts sets by release date
   - Updates data/sets.json automatically

#### Key Components

1. `src/api/localScryfall.ts`
   - Handles all local data operations
   - Implements caching for improved performance after initial load
   - Manages both cards and sets data
   - Provides same interface as original API implementation:
     - `fetchSets()`: Lists all sets from sets.json
     - `fetchCards(setCode)`: Retrieves cards from a specific set
     - `searchCards(query)`: Searches cards by name, set, type, or oracle text

2. `src/api/scryfall.ts`
   - Acts as main entry point
   - Re-exports local implementations
   - Maintains original API interface for seamless integration

3. `src/types/scryfall.ts`
   - Updated type definitions to match bulk data structure
   - Includes additional fields like `set_name`, `type_line`, and `oracle_text`

### Performance Considerations

#### Current Behavior
- Initial load time is longer due to parsing large JSON file
- Subsequent operations are very fast due to in-memory caching

#### Potential Future Improvements
1. Progressive Loading
   - Load data in chunks
   - Implement lazy loading for sets/cards
   - Consider using a more efficient storage format

2. Data Optimization
   - Pre-process bulk data to remove unused fields
   - Create separate indexes for common search patterns
   - Consider using a lightweight local database

3. Caching Strategy
   - Implement persistent caching
   - Add cache invalidation for data updates
   - Consider using IndexedDB for browser storage

### Migration Notes
- No changes required to existing components
- All API interfaces remain the same
- Application works offline after initial data load
