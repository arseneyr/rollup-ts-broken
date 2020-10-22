import  {MyClass} from './class'
import { XOR } from './utils';
export function f(arg: 'a'| 'b') {
  switch(arg) {
    case 'a':
      return MyClass.staticFunction<XOR<{},{}>>({});
      case 'b':
        return MyClass.staticFunction(3)
  }

  return true;
}