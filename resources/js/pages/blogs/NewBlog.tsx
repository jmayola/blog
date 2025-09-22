import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import BlogLayout from '@/layouts/blog-layout';
import { Textarea } from '@headlessui/react';
import { Form } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

function NewBlog() {
    return (
        <BlogLayout>
            <Form
                action="/blog"
                method="post"
                className="m-auto flex w-[50%] flex-col justify-center gap-6 p-6"
                enctype="multipart/form-data"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    name="title"
                                    required
                                    tabIndex={0}
                                    placeholder="This interesting title"
                                />
                                <InputError message={errors.title} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    type="text"
                                    name="description"
                                    tabIndex={1}
                                    placeholder="A short description..."
                                />
                                <InputError message={errors.description} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="body">Content</Label>
                                <Textarea
                                    id="body"
                                    name="body"
                                    data-slot="input"
                                    className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:ring-destructive/40"
                                    required
                                    autoFocus
                                    tabIndex={2}
                                    placeholder="Here is the story..."
                                />
                                <InputError message={errors.body} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description">Image</Label>
                                <Input
                                    id="description"
                                    type="file"
                                    accept='image/*'
                                    name="image_path"
                                    tabIndex={3}
                                    placeholder="great photo!"
                                />
                                <InputError message={errors.image_path} />
                            </div>

                            <div className="flex items-center space-x-3">
                                <Label htmlFor="public">Make it public</Label>
                                <Input
                                    id="public"
                                    type="checkbox"
                                    name="public"
                                    tabIndex={4}
                                />
                                <InputError message={errors.public} />
                            </div>

                            <Button
                                type="submit"
                                className="mt-4 w-full"
                                tabIndex={5}
                                disabled={processing}
                                data-test="submit-button"
                            >
                                {processing && (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                )}
                                Submit
                            </Button>
                        </div>
                    </>
                )}
            </Form>
        </BlogLayout>
    );
}

export default NewBlog;
