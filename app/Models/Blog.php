<?php

namespace App\Models;

use AlAminFirdows\LaravelEditorJs\Facades\LaravelEditorJs;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $guarded = array();
    public function getBodyAttribute()
    {
        return LaravelEditorJs::render($this->attributes['body']);
    }
    protected function author(): Attribute{
        $author = User::where("id", $this->user_id)->get()[0]->name;
        return Attribute::get(
            fn(): string => $author,
        );
    }
}
