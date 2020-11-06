<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit38323378003064938d0e1d6aca4a9aa2
{
    public static $prefixLengthsPsr4 = array (
        'p' => 
        array (
            'phpAPI\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'phpAPI\\' => 
        array (
            0 => __DIR__ . '/..' . '/kia_nasirzadeh/phpapi_serverside',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit38323378003064938d0e1d6aca4a9aa2::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit38323378003064938d0e1d6aca4a9aa2::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
