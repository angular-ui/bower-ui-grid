/*!
 * ui-grid - v4.12.7 - 2024-04-12
* http://ui-grid.info/
 * Copyright (c) 2024 ; License: MIT 
 */

(function () {
  angular.module('ui.grid').config(['$provide', function($provide) {
    $provide.decorator('i18nService', ['$delegate', function($delegate) {
      $delegate.add('no', {
        headerCell: {
          aria: {
            defaultFilterLabel: 'Filter for kolonne',
            removeFilter: 'Fjern filter',
            columnMenuButtonLabel: 'Kolonnemeny'
          },
          priority: 'Prioritet:',
          filterLabel: "Filter for kolonne: "
        },
        aggregate: {
          label: 'elementer'
        },
        groupPanel: {
          description: 'Trekk en kolonneoverskrift hit og slipp den for å gruppere etter den kolonnen.'
        },
        search: {
          placeholder: 'Søk...',
          showingItems: 'Viste elementer:',
          selectedItems: 'Valgte elementer:',
          totalItems: 'Antall elementer:',
          size: 'Sidestørrelse:',
          first: 'Første side',
          next: 'Neste side',
          previous: 'Forrige side',
          last: 'Siste side'
        },
        menu: {
          text: 'Velg kolonner:'
        },
        sort: {
          ascending: 'Sortere stigende',
          descending: 'Sortere fallende',
          none: 'Ingen sortering',
          remove: 'Fjern sortering'
        },
        column: {
          hide: 'Skjul kolonne'
        },
        aggregation: {
          count: 'antall rader: ',
          sum: 'total: ',
          avg: 'gjennomsnitt: ',
          min: 'minimum: ',
          max: 'maksimum: '
        },
        pinning: {
          pinLeft: 'Fest til venstre',
          pinRight: 'Fest til høyre',
          unpin: 'Løsne'
        },
        columnMenu: {
          close: 'Lukk'
        },
        gridMenu: {
          aria: {
            buttonLabel: 'Grid Menu'
          },
          columns: 'Kolonner:',
          importerTitle: 'Importer fil',
          exporterAllAsCsv: 'Eksporter alle data som csv',
          exporterVisibleAsCsv: 'Eksporter synlige data som csv',
          exporterSelectedAsCsv: 'Eksporter utvalgte data som csv',
          exporterAllAsPdf: 'Eksporter alle data som pdf',
          exporterVisibleAsPdf: 'Eksporter synlige data som pdf',
          exporterSelectedAsPdf: 'Eksporter utvalgte data som pdf',
          exporterAllAsExcel: 'Eksporter alle data som excel',
          exporterVisibleAsExcel: 'Eksporter synlige data som excel',
          exporterSelectedAsExcel: 'Eksporter utvalgte data som excel',
          clearAllFilters: 'Clear all filters'
        },
        importer: {
          noHeaders: 'Kolonnenavn kunne ikke avledes. Har filen en overskrift?',
          noObjects: 'Objekter kunne ikke avledes. Er der andre data i filen enn overskriften?',
          invalidCsv: 'Filen kunne ikke behandles. Er den gyldig CSV?',
          invalidJson: 'Filen kunne ikke behandles. Er den gyldig JSON?',
          jsonNotArray: 'Importert JSON-fil må inneholde en liste. Avbryter.'
        },
        pagination: {
          aria: {
            pageToFirst: 'Gå til første side',
            pageBack: 'Gå til forrige side',
            pageSelected: 'Valgte side',
            pageForward: 'Gå til neste side',
            pageToLast: 'Gå til siste side'
          },
          sizes: 'elementer per side',
          totalItems: 'elementer',
          through: 'til',
          of: 'av'
        },
        grouping: {
          group: 'Gruppere',
          ungroup: 'Fjerne gruppering',
          aggregate_count: 'Agr: Antall',
          aggregate_sum: 'Agr: Sum',
          aggregate_max: 'Agr: Maksimum',
          aggregate_min: 'Agr: Minimum',
          aggregate_avg: 'Agr: Gjennomsnitt',
          aggregate_remove: 'Agr: Fjern'
        }
      });
      return $delegate;
    }]);
  }]);
})();
