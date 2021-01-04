import React, {
  ButtonHTMLAttributes,
  FC,
  Fragment,
  InputHTMLAttributes,
  useCallback,
  useContext,
  useState,
} from 'react';

// 扩展 HTML 属性
interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TestButton: FC<BaseButtonProps> = () => {
  return <button>34324</button>;
};

// 重写 HTML 某个属性
interface TestInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: string;
}

const TestInput: FC<TestInputProps> = () => {
  return <input type="text" />;
};

const Demo = () => {
  return (
    <Fragment>
      <TestButton disabled={false} onClick={() => alert(1)}></TestButton>;
      <TestInput />
    </Fragment>
  );
};

// context
enum ThemeMode {
  'dark',
  'light',
}

interface ThemeValueType {
  mode: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

// 定义上下文
const ThemeContext = React.createContext<ThemeValueType>({
  mode: ThemeMode.light,
  onThemeChange: (e: ThemeMode) => e,
});

// 定义提供者
export const ThemeProvider: FC<ThemeValueType> = (props) => {
  return (
    <ThemeContext.Provider
      value={{ mode: props.mode, onThemeChange: props.onThemeChange }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

const TestDiv: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.light);
  return (
    <ThemeProvider mode={theme} onThemeChange={setTheme}>
      {children}
    </ThemeProvider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

// 参考地址
// https://blog.csdn.net/qq_24357165/article/details/108791571

// 事件的类型定义
export const EventDemo: FC<{}> = (props) => {
  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (evt) => {
      evt.preventDefault();
      // ...
    },
    [],
  );

  return <TestButton onClick={handleClick} />;
};

// 常见的事件 event 对象类型
/**
 * ClipboardEvent<T = Element> 剪贴板事件对象
 * DragEvent<T = Element> 拖拽事件对象
 * ChangeEvent<T = Element> Change 事件对象
 * KeyboardEvent<T = Element> 键盘事件对象
 * MouseEvent<T = Element> 鼠标事件对象
 * TouchEvent<T = Element> 触摸事件对象
 * WheelEvent<T = Element> 滚轮事件对象
 * AnimationEvent<T = Element> 动画事件对象
 * TransitionEvent<T = Element> 过渡事件对象
 * FormEvent：一个react的form表单event的类型
 */

/**
 * 事件处理器类型
 * type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }['bivarianceHack'];
type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;
type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;
 */

// https://segmentfault.com/a/1190000019738280
