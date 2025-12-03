import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import { useEffect, useRef } from 'react';

interface TrixInputProps {
    id: string;
    name: string;
    value?: string;
    onChange?: (html: string) => void;
    className?: string;
}

const TrixInput: React.FC<
    TrixInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ id, name, value = '', onChange, className = '', ...props }) => {
    const ejInstance = useRef(null) as any;
    const inputTarget = useRef(null) as any;
    const DEFAULT_INITIAL_DATA = {
        time: new Date().getTime(),
        blocks: [
            {
                type: 'header',
                data: {
                    text: 'This is my awesome editor!',
                    level: 1,
                },
            },
        ],
    };

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save();
                console.log(content);
                inputTarget.current.innerHTML = JSON.stringify(content)
                console.log(inputTarget);

            },
            tools: {
                header: Header,
            },
        });
    };
    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);
    return (
        <>
            {/* Hidden input que envía el contenido al backend */}
            <div
                id="editorjs"
            />
            <textarea hidden id={id} name={name} ref={inputTarget}/>
        </>
    );
};

export default TrixInput;
