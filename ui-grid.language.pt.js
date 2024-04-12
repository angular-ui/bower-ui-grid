/*!
 * ui-grid - v4.12.6 - 2024-04-12
* http://ui-grid.info/
 * Copyright (c) 2024 ; License: MIT 
 */

(function () {
  angular.module('ui.grid').config(['$provide', function($provide) {
    $provide.decorator('i18nService', ['$delegate', function($delegate) {
      $delegate.add('pt', {
        headerCell: {
          aria: {
            defaultFilterLabel: 'Filtro por coluna',
            removeFilter: 'Remover filtro',
            columnMenuButtonLabel: 'Menu coluna',
            column: 'Coluna'
          },
          priority: 'Prioridade:',
          filterLabel: "Filtro por coluna: "
        },
        aggregate: {
          label: 'itens'
        },
        groupPanel: {
          description: 'Arraste e solte uma coluna aqui para agrupar por essa coluna'
        },
        search: {
          aria: {
            selected: 'Linha selecionada',
            notSelected: 'Linha não está selecionada'
          },
          placeholder: 'Procurar...',
          showingItems: 'Mostrando os Itens:',
          selectedItems: 'Itens Selecionados:',
          totalItems: 'Total de Itens:',
          size: 'Tamanho da Página:',
          first: 'Primeira Página',
          next: 'Próxima Página',
          previous: 'Página Anterior',
          last: 'Última Página'
        },
        selection: {
          aria: {
            row: 'Linha'
          },
          selectAll: 'Selecionar Tudo',
          displayName: 'Caixa de Seleção da Linha'
        },
        menu: {
          text: 'Selecione as colunas:'
        },
        sort: {
          ascending: 'Ordenar Ascendente',
          descending: 'Ordenar Descendente',
          none: 'Nenhuma Ordem',
          remove: 'Remover Ordenação'
        },
        column: {
          hide: 'Esconder coluna'
        },
        aggregation: {
          count: 'total de linhas: ',
          sum: 'total: ',
          avg: 'med: ',
          min: 'min: ',
          max: 'max: '
        },
        pinning: {
          pinLeft: 'Fixar Esquerda',
          pinRight: 'Fixar Direita',
          unpin: 'Desprender'
        },
        columnMenu: {
          close: 'Fechar'
        },
        gridMenu: {
          aria: {
            buttonLabel: 'Menu Grid'
          },
          columns: 'Colunas:',
          importerTitle: 'Importar ficheiro',
          exporterAllAsCsv: 'Exportar todos os dados como csv',
          exporterVisibleAsCsv: 'Exportar dados visíveis como csv',
          exporterSelectedAsCsv: 'Exportar dados selecionados como csv',
          exporterAllAsPdf: 'Exportar todos os dados como pdf',
          exporterVisibleAsPdf: 'Exportar dados visíveis como pdf',
          exporterSelectedAsPdf: 'Exportar dados selecionados como pdf',
          exporterAllAsExcel: 'Exportar todos os dados como excel',
          exporterVisibleAsExcel: 'Exportar dados visíveis como excel',
          exporterSelectedAsExcel: 'Exportar dados selecionados como excel',
          clearAllFilters: 'Limpar todos os filtros'
        },
        importer: {
          noHeaders: 'Nomes de colunas não puderam ser derivados. O ficheiro tem um cabeçalho?',
          noObjects: 'Objetos não puderam ser derivados. Havia dados no ficheiro, além dos cabeçalhos?',
          invalidCsv: 'Ficheiro não pode ser processado. É um CSV válido?',
          invalidJson: 'Ficheiro não pode ser processado. É um Json válido?',
          jsonNotArray: 'Ficheiro json importado tem que conter um array. Interrompendo.'
        },
        pagination: {
          aria: {
            pageToFirst: 'Primeira página',
            pageBack: 'Página anterior',
            pageSelected: 'Página Selecionada',
            pageForward: 'Próxima',
            pageToLast: 'Anterior'
          },
          sizes: 'itens por página',
          totalItems: 'itens',
          through: 'a',
          of: 'de'
        },
        grouping: {
          group: 'Agrupar',
          ungroup: 'Desagrupar',
          aggregate_count: 'Agr: Contar',
          aggregate_sum: 'Agr: Soma',
          aggregate_max: 'Agr: Max',
          aggregate_min: 'Agr: Min',
          aggregate_avg: 'Agr: Med',
          aggregate_remove: 'Agr: Remover'
        },
        validate: {
          error: 'Erro:',
          minLength: 'O valor deve ter, no minimo, THRESHOLD caracteres.',
          maxLength: 'O valor deve ter, no máximo, THRESHOLD caracteres.',
          required: 'Um valor é necessário.'
        }
      });
      return $delegate;
    }]);
}]);
})();
