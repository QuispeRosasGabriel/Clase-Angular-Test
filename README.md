# Test Unitarios para Angular

Las pruebas unitarias (también test unitarios, o unit testing) son un método de pruebas de software que se realizan escribiendo fragmentos de código que testeará unidades de código fuente. El objetivo es asegurar que cada unidad funciona como debería de forma independiente. A su vez, puede ayudar a prevenir cambios indeseados en el código, al afectar por error, algun desarrollo previo el cual dañe una prueba exitosa. 

## Casos de Prueba y Cobertura de Código

Los casos de prueba, son un conjunto de condiciones o variables bajo las cuales determinarán si una característica de la aplicación es parcial o completamente satisfactoria. Normalmente, estos casos de prueba son definidos basado en las validaciones y reglas de una DHU, y pueden ser sustentados o validados por el equipo e QA.

Mientras que la cobertura de código es una medida que indica el porcentaje del código fuente que fue abarcado en la ejecución de las pruebas unitarias. Tener un alto porcentaje de code coverage no garantiza que se hayan cubierto todos los casos de pruebas indicados; y ejecutar exitosamente todos los casos de prueba, no garantiza cubrir un alto porcentaje de código.

## Conceptos importantes

Se exponen a continuación un glosario de términos que ayudarán a entender las lecturas posteriores.

* Jasmine: Es un framework de test que permite crear tests fáciles de leer de forma que sirven también de documentación para el código.
* Karma: Es un test runner, un lanzador de test, desarrollado por el equipo de angular, que nos permite automatizar algunas tareas de los frames de tests, como jasmine.
* Suite: Representa un describe, agrupa specs relacionados. Típicamente, cada archivo de test (.spec) tiene al menos uno principal. Pueden existir otras Suite dentro de uno.
* Spec: Es la agrupación de expects que cumpla un estado esperado. Un Spec con todas las expectativas verdaderas es una prueba exitosa. Si una falla, se considera fallida. 
* Expectation: Una expectativa es una afirmación que es verdadera o falsa. 
* Spy: Es una funcionalidad que permite “espiar” las llamadas a funciones y hacerle un seguimiento.

## Estructura de los test unitarios

Cada .spec que testeará una unidad específica del proyecto, debe estar compuesto por un describe principal, que engloba todo lo relacionado a la prueba en cuestión, y 2 describe internos. Uno, que validará la correcta creación e inicialización de la unidad a probar; mientras que el segundo, ejecutará los casos de pruebas definidos para dicha unidad.

Cada it dentro de los describe, debe seguir la estructura AAA/PAA, lo cual facilitará su desarrollo, ejecución, lectura y mantenimiento.

* Arrange (Preparar): En esta parte del código se espera establecer las condiciones iniciales para poder realizar el test, así como el resultado que esperas obtener y la definición de los espías (spy) que escucharán cuando un método específico he llamado, pudiendo devolver un mock con un resultaod controlado. 
* Act (Accionar): En esta parte del código, se espera realizar la ejecución que gatille las acciones a probar.
* Assert (Asegurar): En esta parte del código, se verifica que los resultados de la ejecución, coincida con los valores esperados.

## Principios de los test unitarios

Las pruebas unitarias deben cumplir una serie de características, que formal el acrónimo FIRST. Esto, nos ayudará a concentrarnos en las partes importantes de la prueba, y evitar que perdamos el foco sobre que probar.

* Fast (Rápida): Los test unitarios deben completar su ejecución lo más rápido posible. Al ser pruebas que se realizan (o deberían realizarse) sobre fragmentos pequeños de código, deben finalizar su ejecución lo antes posible.
* Isolated/Independent (Aislada/Independiente):  En las pruebas unitarias, el objeto de prueba no debe depender de otra unidad de código. Esto no significa que no requiera de datos para poder ejecutar ese código, pero esto se realizará a través de mocks o stubs, que vienen a ser «objetos falsos» creados específicamente para realizar las pruebas.
* Repeatable (Repetible): Las pruebas unitarias deben poder repetirse. De hecho, lo vas a repetir muchas veces. Ten en cuenta que deberías ejecutar las pruebas cada vez que quieras subir nuevo código al repositorio.
* Self-validating (Autovalidable): Los unit test deben mostrar de forma clara, y sin que sea necesario tu intervención, el resultado de la prueba. Gracias a la parte de arrange, donde estableces los resultados a obtener, la parte de assert puede responder si la prueba ha sido satisfactoria o no.
* Timely (En el momento oportuno): Los test unitarios deben realizarse lo antes posible, el código no debe llegar a producción sin haber escrito y superado las pruebas unitarias.

## Resultados esperados

![Code Coverage](/src/assets/resultados.png "Code Coverage")

En la imagen anterior se observan 2 mediciones. La primera, indica la totalidad de Casos de prueba ejecutados exitosamente. Si uno de ellos falla, la ejecución de la prueba se considera fallida.

La segunda medición, tiene indicadores de diferentes puntos a la hora de medir la cobertura de código:

* Statements (Sentencias): Indica el porcentaje de sentencias que fueron ejecutadas durante la corrida de las pruebas. Una sentencia o delcaración es una instrucción que define una acción. Puede haber una sentencia en multiples líneas, asi como tambien tener varias sentencias en una sola linea.
* Branches (Ramas): Una rama es una bifurcación que se puede producir durante la ejecución. Esta métrica indica si se probaron todos los caminos posibles de un código. Un ejemplo sencillo, es que si se prueba un if, se espera que se pruebe su camino else.
* Functions (Funciones): Mide las funciones que fueron probadas en una corrida.
* Lines (Líneas): Indica las líneas de codigo que fueron cubiertas por las pruebas unitarias. 

